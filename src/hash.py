import hashlib

matricula = "20229005817" 
nome = "Anna Beatriz Barbosa de Godoy" 

dados_concatenados = f"{matricula} {nome}"

hash_objeto = hashlib.sha1(dados_concatenados.encode())
hash_hex = hash_objeto.hexdigest()

print(f"Hash gerado: {hash_hex}")

with open("token.txt", "w") as f:
    f.write(hash_hex)

print("Arquivo src/token.txt criado com sucesso!")