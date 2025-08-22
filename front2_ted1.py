
def coletar_dados():
    pessoas = int(input("Quantas pessoas deseja cadastrar? "))
    dados = []

    for i in range(pessoas):
        print(f"\nPessoa {i + 1}:")
        altura = float(input("Digite a altura, em metros (x.xx): "))
        sexo = input("Digite o sexo (M/F): ").strip().upper()
        while sexo not in ('M', 'F'):
            print("Sexo inválido! Por favor, digite 'M' ou 'F'.")
            sexo = input("Digite o sexo (M/F): ").strip().upper()

        dados.append({'altura': altura, 'sexo': sexo})

    return dados

def maior_menor_altura(dados):
    alturas = [pessoa['altura'] for pessoa in dados]
    maior = max(alturas)
    menor = min(alturas)
    return maior, menor

def media_altura_por_sexo(dados):
    alturas_m = [p['altura'] for p in dados if p['sexo'] == 'M']
    alturas_f = [p['altura'] for p in dados if p['sexo'] == 'F']

    media_m = sum(alturas_m) / len(alturas_m) if alturas_m else 0
    media_f = sum(alturas_f) / len(alturas_f) if alturas_f else 0

    qtd_m = len(alturas_m)
    qtd_f = len(alturas_f)

    return media_m, media_f, qtd_m, qtd_f


dados_pessoas = coletar_dados()

maior, menor = maior_menor_altura(dados_pessoas)
media_m, media_f, qtd_m, qtd_f = media_altura_por_sexo(dados_pessoas)

print(f"\nMaior altura: {maior}m")
print(f"Menor altura: {menor}m")

print(f"\nQuantidade de pessoas do sexo masculino: {qtd_m}")
print(f"Média de altura do sexo masculino: {media_m:.2f}m")

print(f"\nQuantidade de pessoas do sexo feminino: {qtd_f}")
print(f"Média de altura do sexo feminino: {media_f:.2f}m")
