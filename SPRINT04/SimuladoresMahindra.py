import random
import time
import pandas as pd


# Função para obter os tempos das corridas de um piloto
# Solicita o tempo de cada corrida individualmente e armazena em um dicionário
def obter_tempos_corridas(quantidade_corridas: int):
    tempos_corridas = {}
    for i in range(1, quantidade_corridas + 1):
        tempo = float(input(f"Digite o tempo da {i}ª corrida (em segundos): "))
        tempos_corridas[f"Corrida {i}"] = tempo
    return tempos_corridas


# Função para calcular a média de tempo das corridas para cada piloto
# Solicita a quantidade de pilotos e corridas, coleta os tempos e exibe a média de cada piloto
def media_corridas():
    # Solicitação da quantidade de pilotos
    quantidade_pilotos = int(input("Digite a quantidade de pilotos: "))
    quantidade_corridas = int(input("Digite aqui a quantidade de corridas a serem calculadas a média:"))
    # Dicionário para armazenar os tempos de cada piloto
    tempos_pilotos = {}

    # Preenchimento dos tempos para cada piloto
    for piloto in range(1, quantidade_pilotos + 1):
        nome_piloto = input(f"Digite o nome do piloto {piloto}: ")
        tempos_pilotos[nome_piloto] = obter_tempos_corridas(quantidade_corridas)

    # Exibição das corridas e tempos para cada piloto
    for piloto, tempos_corridas in tempos_pilotos.items():
        print(f"\n{piloto}:")
        for corrida, tempo in tempos_corridas.items():
            print(f"{corrida}: {tempo:.2f} segundos")

    # Cálculo da média dos tempos para cada piloto
    for piloto, tempos_corridas in tempos_pilotos.items():
        soma_tempos = sum(tempos_corridas.values())
        media_tempos = soma_tempos / len(tempos_corridas)
        print(f"\nMédia dos tempos para {piloto}: {media_tempos:.2f} segundos")


# ----------------------------------------------------------------------------------

# Função para calcular a velocidade média de um carro elétrico
# Recebe a distância e o tempo e calcula a velocidade
def calculadora_velocidade_media():
    try:
        distancia = float(input("Digite a distância percorrida (em km): "))
        tempo = float(input("Digite o tempo levado (em horas): "))

        if tempo > 0:
            velocidade_media = distancia / tempo
            print(f"A velocidade média do carro elétrico é {velocidade_media:.2f} km/h.")
        else:
            print("O tempo deve ser maior que zero.")
    except ValueError:
        print("Por favor, insira um número válido.")


# ------------------------------------------------------------------------------------------

# Função para verificar se a bateria de um carro é suficiente para completar a corrida
# Calcula se a capacidade da bateria é maior ou igual ao consumo para a distância da corrida
def verificador_capacidade_bateria():
    try:
        capacidade_bateria = float(input("Digite a capacidade da bateria do carro (em kWh): "))
        consumo_por_km = float(input("Digite o consumo de energia do carro (em kWh/km): "))
        distancia_corrida = float(input("Digite a distância da corrida (em km): "))

        if capacidade_bateria >= consumo_por_km * distancia_corrida:
            print("O carro tem energia suficiente para completar a corrida.")
        else:
            print("O carro NÃO tem energia suficiente para completar a corrida.")
    except ValueError:
        print("Por favor, insira um número válido.")


# --------------------------------------------------------------------------------------------

# Função para comparar a eficiência energética de dois carros
# Compara o consumo de energia em kWh/km e determina qual carro é mais eficiente
def comparador_eficiencia_energetica():
    try:
        consumo_carro1 = float(input("Digite o consumo de energia do Carro 1 (em kWh/km): "))
        consumo_carro2 = float(input("Digite o consumo de energia do Carro 2 (em kWh/km): "))

        if consumo_carro1 < consumo_carro2:
            print("O Carro 1 é mais eficiente em termos de consumo de energia.")
        elif consumo_carro1 > consumo_carro2:
            print("O Carro 2 é mais eficiente em termos de consumo de energia.")
        else:
            print("Ambos os carros têm a mesma eficiência energética.")
    except ValueError:
        print("Por favor, insira um número válido.")


# -----------------------------------------------------------------------------------------------

# Função para simular uma corrida com múltiplos participantes e múltiplas voltas
# Simula tempos aleatórios para cada volta e determina o vencedor
def simulacao_classificacao_corrida():
    # Definindo os participantes da corrida
    participantes = ["Carro A", "Carro B", "Carro C", "Carro D"]
    voltas = 5

    # Função não declarada explicitamente (forca_opcao), presumivelmente para escolher um carro favorito
    carro_escolhido = forca_opcao('Para qual carro você deseja torcer', participantes)
    print(f"Você está torcendo para o {carro_escolhido}")

    # Dicionário para armazenar o tempo total de cada participante
    tempos = {participante: 0 for participante in participantes}

    # Simulando as voltas
    for volta in range(1, voltas + 1):
        print(f"Volta {volta}")
        for participante in participantes:
            # Simulando o tempo da volta entre 10 e 20 segundos
            tempo_volta = random.uniform(10, 20)
            tempos[participante] += tempo_volta
            print(
                f"{participante} completou a volta em {tempo_volta:.2f} segundos. Tempo total: {tempos[participante]:.2f} segundos.")
        print("\n")
        time.sleep(1)  # Simulação de tempo de espera entre as voltas

    # Determinando o vencedor
    vencedor = min(tempos, key=tempos.get)
    print(f"O vencedor é {vencedor} com um tempo total de {tempos[vencedor]:.2f} segundos.")

    # Verificação se o carro escolhido pelo usuário venceu
    if vencedor == carro_escolhido:
        print(f"Parabéns, seu time venceu!🎉😁")
    else:
        print(f"Que pena, seu time perdeu 😥😢")


# ----------------------------------------------------------------------------------------------------

# Função que solicita um número ao usuário, repetindo até que seja fornecido um valor numérico válido
def checa_numero(msg, msg_erro = 'inválido'):
    num= input(msg)
    while not num.isnumeric():
        print(msg_erro)
        num = input(msg)
    return int(num)

# Função que força o usuário a escolher uma opção válida de um conjunto fornecido
# Continua solicitando até que o usuário forneça uma escolha válida
def forca_opcao(msg, conjunto_opcoes, msg_erro='Inválido'):
    opcoes = '\n'.join(conjunto_opcoes)
    escolha = input(f'{msg}\n{opcoes}\n->')
    while not escolha in conjunto_opcoes:
        print(msg_erro)
        escolha = input(f'{msg}\n{opcoes}\n->')
    return escolha

# Função que remove um item específico de um dicionário com base em uma chave fornecida
# Atualiza todas as listas contidas no dicionário removendo o item correspondente
def remover(dict, chave):
    item_removido = forca_opcao(f'Qual {chave} você deseja remover?', dict[chave])
    indice = cria_indices(dict, chave)[item_removido]
    for key in dict.keys():
        if isinstance(dict[key], type({})):
            for chave in dict[key].keys():
                dict[key][chave].pop(indice)
        else:
            dict[key].pop(indice)

# Função que cria um dicionário de índices associando cada item de uma lista a seu índice correspondente
def cria_indices(dict, chave):
    indices = {}
    for i in range(len(dict[chave])):
        nome = dict[chave][i]
        indices[nome] = i
    return indices

# Função que cadastra novos dados em um dicionário, solicitando informações do usuário
# Para cada chave do dicionário, coleta novos valores e os adiciona ao final das listas associadas
def cadastrar(dict):
    for key in dict.keys():
        if isinstance(dict[key], type({})):
            for chave in dict[key].keys():
                info = input(f'Diga o novo {chave}')
                dict[key][chave].append(info)
        else:
            info = input(f'Diga o novo {key}')
            dict[key].append(info)
    return

# Função que atualiza os valores de um dicionário com base na escolha do usuário
# Pode atualizar todos os campos ou apenas um campo específico
def atualizar(dict, chave):
    opcoes_atualizacao = ['Total', 'Específica']
    escolha = forca_opcao(f'Qual {chave} você deseja atualizar', dict[chave])
    indice_escolha = cria_indices(dict, chave)[escolha]
    tipo_atualizacao = forca_opcao('Que tipo de atualização será?', opcoes_atualizacao )
    if tipo_atualizacao == opcoes_atualizacao[0]:
        for key in dict.keys():
            if isinstance(dict[key], type({})):
                for chave in dict[key].keys():
                    info = input(f'Diga o novo {chave}: ')
                    dict[key][chave][indice_escolha] = info
            else:
                info = input(f'Diga o novo {key}: ')
                dict[key][indice_escolha] = info
    else:
        caracteristica = forca_opcao('O que será alterado?', dict.keys())
        if isinstance(dict[caracteristica], type({})):
            for chave in dict[caracteristica].keys():
                dict[caracteristica][chave][indice_escolha] = input(f'Diga o novo {chave}')
        else:
            dict[caracteristica][indice_escolha] = input(f'Diga o novo {caracteristica}')
    return

# Função que imprime recursivamente o conteúdo de um dicionário
# Formata a impressão de forma hierárquica, com indentação baseada na profundidade dos itens
def printa_dics(dict, qtd=0):
    espacamento = qtd*' '
    for key in dict.keys():
        if isinstance(dict[key], type({})):
            print(key)
            if key in dict.keys():
                qtd = 1
            else:
                qtd += 1
            printa_dics(dict[key], qtd)
        elif isinstance(dict[key], list):
            if isinstance(dict[key][0], int):
                print(f"{espacamento}{key} : {', '.join(str(num) for num in dict[key])}")
            else:
                print(f"{espacamento}{key} : {', '.join(str(i) for i in dict[key])}")
        else:
            print(f"{espacamento}{key} : {dict[key]}")
    return

def limpa_carrinho():
    carrinho['Produtos'].clear()
    carrinho['Valor total']['R$'] = 0
    carrinho['Valor total']['MP'] = 0
    carrinho['Endereço']['Rua'] = ''
    carrinho['Endereço']['Número'] = ''
    carrinho['Endereço']['CEP'] = ''
    carrinho['Endereço']['Complemento'] = ''
    return

# Função que verifica se o pedido do usuário está correto e reinicializa o carrinho caso o pedido seja confirmado
# Limpa os produtos, valores e informações de endereço do carrinho se o usuário confirmar ou cancelar o pedido
def escolha_final(carrinho):
    confirma_pedido = forca_opcao('O pedido está correto?', sim_ou_nao)
    if confirma_pedido == sim_ou_nao[0]:
        print('Pedido Realizado!')
        print("-------------------")
        limpa_carrinho()
        return True
    elif confirma_pedido == sim_ou_nao[1]:
        print('Carrinho Apagado')
        print("-------------------")
        limpa_carrinho()
        return False


# Função que permite ao cliente comprar produtos
# O cliente escolhe um produto, define a quantidade desejada e a forma de pagamento
# O carrinho é atualizado com os produtos e valores, e o estoque é reduzido conforme a compra
# A função também solicita o endereço de entrega e finaliza o pedido
def comprar(dict, chave):
    while True:
        escolha = forca_opcao(f'Qual {chave} lhe interessa?', dict[chave])
        printa_dics(dict)
        indice_escolha = cria_indices(dict, chave)[escolha]

        # Verifica se o cliente deseja comprar o produto escolhido
        comprar = forca_opcao(f'Você vai comprar o {escolha}', sim_ou_nao)
        print(comprar.capitalize())
        if comprar == sim_ou_nao[0]:
            # Solicita a quantidade do produto desejada
            qtd = checa_numero(f'Quantas unidades de {escolha}?\n->')
            # Verifica se há estoque suficiente
            if qtd > dict['Estoque'][indice_escolha]:
                print('Não há quantidade suficiente')
                continue
            else:
                # Adiciona o produto ao carrinho
                if escolha not in carrinho['Produtos'].keys():
                    carrinho['Produtos'][escolha] = qtd
                else:
                    carrinho['Produtos'][escolha] += qtd
                # Solicita a forma de pagamento e calcula o valor total
                forma_pagamento = forca_opcao('Qual será a forma de pagamento', dados_produtos['Preço'])
                if forma_pagamento == 'R$':
                    carrinho['Valor total']['(R$)'] += qtd * dados_produtos['Preço']['R$'][indice_escolha]
                elif forma_pagamento == 'MP':
                    carrinho['Valor total']['MP'] += qtd * dados_produtos['Preço']['MP'][indice_escolha]

            # Verifica se o cliente deseja encerrar a compra
            encerrar = forca_opcao('Você deseja encerrar a compra?', sim_ou_nao)
            if encerrar == sim_ou_nao[0]:
                # Solicita o endereço de entrega
                if carrinho['Valor total']['(R$)'] or carrinho['Valor total']['MP']:
                    for key in carrinho['Endereço'].keys():
                        info = input(f'Diga o/a {key}: ')
                        carrinho['Endereço'][key] += info
                    printa_dics(carrinho)
                    DataFrame_carrinho()
                    # Finaliza o pedido e atualiza o estoque
                    if escolha_final(carrinho) is True:
                        dict['Estoque'][indice_escolha] -= qtd
                        break
                    else:
                        break
                else:
                    print('O carrinho está vazio!')
                    break
        else:
            break
    return

# Exibe o banco de dados dos pilotos em formato de DataFrame
def DataFrame_pilotos():
    df_pilot = (pd.DataFrame(dados_pilotos))
    print(df_pilot)
    return df_pilot

# Exibe o banco de dados dos produtos em formato de DataFrame
def DataFrame_produtos():
    df_prod = pd.DataFrame({
        'Produto': dados_produtos['Produto'],
        'Categoria': dados_produtos['Categoria'],
        'Estoque': dados_produtos['Estoque'],
        'Preço (R$)': dados_produtos['Preço']['R$'],
        'Preço (MP)': dados_produtos['Preço']['MP']
    })
    print(df_prod)
    return df_prod

# Exibe o banco de dados carrinho em formato de DataFrame
def DataFrame_carrinho():
    df_produtos_carrinho = pd.DataFrame(list(carrinho['Produtos'].items()), columns=['Produto', 'Quantidade'])

    # Adicionar colunas de valor total e endereço a cada linha do DataFrame
    df_produtos_carrinho['Valor total (R$)'] = carrinho['Valor total']['(R$)']
    df_produtos_carrinho['Valor total (MP)'] = carrinho['Valor total']['MP']
    df_produtos_carrinho['Rua'] = carrinho['Endereço']['Rua']
    df_produtos_carrinho['Número'] = carrinho['Endereço']['Número']
    df_produtos_carrinho['CEP'] = carrinho['Endereço']['CEP']
    df_produtos_carrinho['Complemento'] = carrinho['Endereço']['Complemento']
    print(df_produtos_carrinho)
    return df_produtos_carrinho

# Função de menu que oferece diferentes opções para o usuário interagir com o sistema
# Permite escolher entre cálculo de média de corridas, verificação de capacidade de bateria, eficiência energética, simulação de corrida, etc.
def menu_opcoes():
    resposta_menu = 0

    # Loop que mantém o menu ativo até o usuário escolher sair (opção 8)
    while resposta_menu != 8:
        print("\n")
        print(f"Escolha uma das opções à seguir:")
        print(f"1- Obter média de tempo de corridas")
        print(f"2- Cálculo de velocidade média")
        print(f"3- Verificador de Capacidade de Bateria")
        print(f"4- Comparador de eficiência energética")
        print(f"5- Simulação de Corrida")
        print(f"6- Manipular DataBase dos Pilotos")
        print(f"7- Manipular DataBase dos Produtos")
        print(f"8 - Sair")

        # Usuário escolhe uma das opções e a função correspondente é executada
        resposta_menu = int(input("Qual das opções você deseja escolher?"))
        if resposta_menu == 1:
            media_corridas()
        elif resposta_menu == 2:
            calculadora_velocidade_media()
        elif resposta_menu == 3:
            verificador_capacidade_bateria()
        elif resposta_menu == 4:
            comparador_eficiencia_energetica()
        elif resposta_menu == 5:
            simulacao_classificacao_corrida()
        elif resposta_menu == 6:
            manipular_database_piloto()  # Função não definida no código fornecido
        elif resposta_menu == 7:
            manipular_database_produtos()  # Função não definida no código fornecido
        elif resposta_menu == 8:
            print("Saindo do Sistema...")
            break
        else:
            print("Digite uma Opção Válida!")


# Menu principal para o cliente, com diversas opções de funcionalidades relacionadas à Fórmula E
def menu_cliente():
    resposta_menu = 0
    while resposta_menu != 9:
        print("\n")
        print(f"Escolha uma das opções à seguir:")
        print(f"1- Obter média de tempo de corridas")
        print(f"2- Cálculo de velocidade média")
        print(f"3- Verificador de Capacidade de Bateria")
        print(f"4- Comparador de eficiência energética")
        print(f"5- Simulação de Corrida")
        print(f'6- Mostrar dados dos Pilotos')
        print(f'7- Mostrar dados dos Produtos')
        print(f'8- Comprar Produto')
        print(f"9- Sair")
        resposta_menu = int(input("Qual das opções você deseja escolher?"))
        # Opções do menu: média de corridas, cálculo de velocidade, etc.
        if resposta_menu == 1:
            media_corridas()
        elif resposta_menu == 2:
            calculadora_velocidade_media()
        elif resposta_menu == 3:
            verificador_capacidade_bateria()
        elif resposta_menu == 4:
            comparador_eficiencia_energetica()
        elif resposta_menu == 5:
            simulacao_classificacao_corrida()
        # Mostrar dados de pilotos ou produtos
        elif resposta_menu == 6:
            printa_dics(dados_pilotos)
            DataFrame_pilotos()
        elif resposta_menu == 7:
            printa_dics(dados_produtos)
            DataFrame_produtos()
        # Iniciar processo de compra de produto
        elif resposta_menu == 8:
            comprar(dados_produtos, 'Produto')
        # Sair do sistema
        elif resposta_menu == 9:
            print("Saindo do Sistema...")
            break
        else:
            print("Digite uma Opção Válida!")
    return

# Função que manipula o banco de dados dos pilotos, oferecendo opções para mostrar, cadastrar, remover ou atualizar pilotos
def manipular_database_piloto():
    resposta_menu = 0
    while resposta_menu != 5:
        print('Escolha uma das opções')
        print('1- Mostrar DataBase')
        print('2- Cadastrar novo Piloto')
        print('3- Remover Piloto')
        print('4- Atualizar Piloto')
        print('5- Voltar ao Menu')
        resposta_menu = int(input("Qual das opções você deseja escolher?"))
        # Opção para mostrar o banco de dados dos pilotos
        if resposta_menu == 1:
            printa_dics(dados_pilotos)
            DataFrame_pilotos()
        # Opção para cadastrar um novo piloto
        elif resposta_menu == 2:
            cadastrar(dados_pilotos)
        # Opção para remover um piloto existente
        elif resposta_menu == 3:
            remover(dados_pilotos, 'Piloto')
        # Opção para atualizar as informações de um piloto
        elif resposta_menu == 4:
            atualizar(dados_pilotos, 'Piloto')
        # Voltar ao menu principal
        elif resposta_menu == 5:
            menu_opcoes()
            break


# Função que manipula o banco de dados dos produtos, oferecendo opções para mostrar, cadastrar, remover ou atualizar produtos
def manipular_database_produtos():
    resposta_menu = 0
    while resposta_menu != 5:
        print('Escolha uma das opções')
        print('1- Mostrar DataBase')
        print('2- Cadastrar novo Produto')
        print('3- Remover Produto')
        print('4- Atualizar Produto')
        print('5- Voltar ao Menu')
        resposta_menu = int(input("Qual das opções você deseja escolher?"))
        # Opção para mostrar o banco de dados dos produtos
        if resposta_menu == 1:
            printa_dics(dados_produtos)
            DataFrame_produtos()
        # Opção para cadastrar um novo produto
        elif resposta_menu == 2:
            cadastrar(dados_produtos)
        # Opção para remover um produto existente
        elif resposta_menu == 3:
            remover(dados_produtos, 'Produto')
        # Opção para atualizar as informações de um produto
        elif resposta_menu == 4:
            atualizar(dados_produtos, 'Produto')
        # Voltar ao menu principal
        elif resposta_menu == 5:
            menu_opcoes()
            break





# Função que identifica se o usuário é cliente ou funcionário e direciona para o menu apropriado
def cliente_funcionario():
    cliente_ou_funcionario = ['Cliente', 'Funcionário']
    resposta = forca_opcao('Você é Cliente ou Funcionário?', cliente_ou_funcionario)
    if resposta == cliente_ou_funcionario[0]:
        menu_cliente()
    else:
        menu_opcoes()


# Variáveis globais que são utilizadas no sistema, contendo listas de pilotos, produtos e carrinho de compras
sim_ou_nao = ['Sim', 'Não']

# Banco de dados dos pilotos, contendo informações como piloto, carro, tempo, posição e nacionalidade
dados_pilotos = {
    'Piloto': ['Luan', 'Boba', 'Igu', 'Nabo'],
    'Carro': ['MacLaren', 'Ferrari', 'Audi', 'Mercedes'],
    'Tempo Min': ['2', '3', '5', '4'],
    'Posição': ['1', '2', '4', '3'],
    'Nacionalidade': ['Brasileiro', 'Italiano', 'Indiano', 'Francês'],
    'Idade': ['18', '18', '18', '18']
}

# Banco de dados dos produtos, com informações sobre produtos, categoria, estoque e preços
dados_produtos = {
    'Produto': ['Boné', 'Camiseta 1', 'Camiseta 2', 'Jaqueta'],
    'Categoria': ['Acessórios', 'Camisetas', 'Camisetas', 'Blusas de Frio'],
    'Estoque': [4, 3, 6, 7],
    'Preço': {'R$': [50, 150, 200, 450], 'MP': [4000, 12000, 16000, 360000]}
}

# Estrutura de carrinho de compras, contendo os produtos, valor total e endereço de entrega
carrinho = {
    'Produtos': {},
    'Valor total': {
        '(R$)': 0,
        'MP': 0,
    },
    'Endereço': {
        "Rua": '',
        'Número': '',
        'CEP': '',
        'Complemento': '',
    }
}

carrinho_inicial = {
    'Produtos': {},
    'Valor total': {
        '(R$)': 0,
        'MP': 0,
    },
    'Endereço': {
        "Rua": '',
        'Número': '',
        'CEP': '',
        'Complemento': '',
    }
}

# Função que direciona o usuário ao menu correto com base em ser cliente ou funcionário
cliente_funcionario()
