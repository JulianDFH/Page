from flask import Flask, request
from flask_cors import CORS
from flask_caching import Cache
from peewee import MySQLDatabase, Model, CharField
import hashlib
import ssl
import os


# Configuración de Flask
app = Flask(__name__)
CORS(app)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})


# Función hash SHA-256
def hash_sha256(texto):
    return hashlib.sha256(texto.encode()).hexdigest()


# Configuración de base de datos MySQL
db = MySQLDatabase(
    'defaultdb',
    user="avnadmin",
    password="AVNS_UIia9L8vkhQCrzvbtH1",
    host="mysql-9c32832-juliandarioforeroh-9b71.b.aivencloud.com",
    port=19758,
    ssl={'fake_flag_to_enable_ssl': True}
)


# Modelo de Usuario
class Usuario(Model):
    nombre = CharField()
    contraseña = CharField()

    class Meta:
        database = db


# Inicializar base de datos y crear tabla si no existe
def iniciar_db():
    db.connect()
    db.create_tables([Usuario], safe=True)


# Ruta de inicio de sesión
@app.route("/Inicio_Sesion")
@cache.cached(timeout=86400)
def inicio_sesion():
    usuario = request.args.get("Usuario", "")
    contraseña = request.args.get("Contraseña", "")
    

    try:
        user = Usuario.select().where(Usuario.nombre == usuario).first()
        print(hash_sha256(contraseña))
        print(user.contraseña)
        if user and hash_sha256(contraseña) == user.contraseña:
            print("True")
            return "True"

        else:
            print("False")
            return "False"
    except Exception as e:
        print("Error")
        print(e)
        return "False"



# al final de tu archivo
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)