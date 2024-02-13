
# DESAFIO:  DSFilter

## Clique aqui para acessar o projeto em Produção  - [https://williamsartijose.github.io/](https://williamsartijose.github.io/DesafioGithubAPI/)







Você deverá entregar um projeto ReactJS conforme design Figma e caso de uso abaixo.



https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter


Você deve usar o script abaixo para implementar a base de dados de produtos, bem como a função que busca
os produtos por preço:

https://gist.github.com/acenelio/fa7d03cb660b35cd9986623f1f07aeb3


```bash
export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}

const products: ProductDTO[] = [
  {
    id: 1,
    name: "The Lord of the Rings",
    price: 90.5,
  },
  {
    id: 2,
    name: "Smart TV",
    price: 2190.0,
  },
  {
    id: 7,
    name: "PC Gamer X",
    price: 1350.0,
  },
  {
    id: 15,
    name: "PC Gamer Weed",
    price: 2200.0,
  },
  {
    id: 21,
    name: "PC Gamer Tx",
    price: 1680.0,
  },
  {
    id: 17,
    name: "PC Gamer Turbo",
    price: 1280.0,
  },
  {
    id: 20,
    name: "PC Gamer Tr",
    price: 1650.0,
  },
  {
    id: 9,
    name: "PC Gamer Tera",
    price: 1950.0,
  },
  {
    id: 13,
    name: "PC Gamer Plus",
    price: 1350.0,
  },
  {
    id: 11,
    name: "PC Gamer Nitro",
    price: 1450.0,
  },
  {
    id: 23,
    name: "PC Gamer Min",
    price: 2250.0,
  },
  {
    id: 16,
    name: "PC Gamer Max",
    price: 2340.0,
  },
  {
    id: 18,
    name: "PC Gamer Hot",
    price: 1450.0,
  },
];
```

![Web 0](https://github.com/williamsartijose/DesafioDSFilter/blob/main/img/1.png)

![Web 0](https://github.com/williamsartijose/DesafioDSFilter/blob/main/img/2.png)


Critérios de correção
Todos critérios a seguir devem ser contemplados:
1) O projeto deve conter os componentes principais (pode haver outros conforme você quiser):
- Cabeçalho
- Corpo da tela de listagem
- Card de filtro
- Card de listagem
2) A lista de produtos deve ser passada como Prop para o card de listagem.
3) O card de filtro deve emitir um evento onFilter(min, max). Este evento serve para comunicar os preços mínimo
e máximo sempre que o formulário for submetido.
4) Context API utilizada para manter o estado global do número de produtos mostrados na tela. Sempre que
for feita uma nova filtragem e o número de produtos listados mudar, o número deve ser atualizado no cabeçalho.






# DSFilter

O DSFilter é uma aplicação front-end desenvolvida durante o treinamento `ReactJS Professional` da [DevSuperior](https://devsuperior.com.br/), com o objetivo de reforçar conceitos avançados em [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) e [Vite](https://vitejs.dev/). A aplicação oferece uma interface para filtrar produtos, demonstrando a eficácia da `Context API` do React na gestão de estados globais.

## Funcionalidades

- Gestão de estado global com Context API.
- Filtros dinâmicos para listagem de produtos.
- Aplicação de TypeScript para reforçar a segurança e escalabilidade do código.
- Ambiente de desenvolvimento otimizado com Vite.

## Visualização do Projeto

![Web 0](https://github.com/williamsartijose/DesafioDSFilter/blob/main/img/1.png)


## Estrutura Hierárquica do Projeto

```
DSFilter/
├── src/
│   ├── assets/...
│   ├── components/
│   │   ├── common/
│   │   │   ├── Card/
│   │   │   │   └── ...
│   │   │   ├── Filter/
│   │   │   │   └── ...
│   │   │   ├── Header/
│   │   │   │   └── ...
│   │   │   └── ProductList/
│   │   │       └── ...
│   ├── contexts/
│   │   ├── context-combiner.tsx
│   │   ├── context-global.tsx
│   │   └── context-product.ts
│   ├── services/
│   │   └── product-service.ts
│   └── App.tsx
├── package.json
└── ...
```

## Destaques do Código

### Configuração da Context API para Estado Global

O projeto utiliza uma estrutura modular para o estado global, permitindo integração e expansão de contextos adicionais com facilidade.

```tsx
// context-product.ts
export const ProductCountContext = createContext<...>(...);

// context-global.tsx
export function GlobalProvider({ providers, children }): ... {
    ...
}
```

### Integração do Contexto Global no Componente Principal (`App.tsx`)

O `App.tsx` serve como o coração da aplicação, onde os estados globais são inicializados e gerenciados. Utilizamos o `GlobalProvider` para envolver o aplicativo com os contextos combinados, permitindo que cada componente acesse os estados globais conforme necessário.

Exemplo do processo:

```tsx
// App.tsx
import { createGlobalContextProviders } from "./contexts/context-combiner";
...

// Valores dos contextos que serão passados aos provedores combinados
const contextValues = {
    productCountContext: {
        productCount,
        setProductCount
    },
    // Outros contextos podem ser adicionados aqui
};

// Criação dos provedores de contexto combinados para serem passados ao GlobalProvider
const providers = createGlobalContextProviders(contextValues);

return (
    <GlobalProvider providers={providers}>
        ...
        ...
    </GlobalProvider>
);
```

### Acesso ao Estado Global no Cabeçalho (`Header`):

O componente `Header` serve como uma parte crucial da interface do usuário no aplicativo `DSFilter`, demonstrando uma aplicação prática da `Context API` do React para acessar e exibir dados globais de estado.

#### Propósito do Componente `Header`:

O `Header` é responsável por apresentar a marca do aplicativo e a contagem atual de produtos que atendem aos critérios de filtragem estabelecidos pelo usuário. Ele responde a mudanças de estado de forma reativa, garantindo que a contagem de produtos mostrada esteja sempre atualizada.

#### Interação com o Estado Global:

Utilizando o hook `useContext`, o `Header` acessa diretamente o `ProductCountContext`. Este contexto mantém o estado global `productCount`, que é a variável onde a contagem de produtos é armazenada. Este método elimina a necessidade de `prop drilling`, simplificando o fluxo de dados na aplicação.

#### Código do Componente `Header`:

```tsx
import './styles.css';
import { useContext } from 'react';
import { ProductCountContext } from '../../../contexts/context-product';

export default function Header() {
    const { productCount } = useContext(ProductCountContext);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-brand">DSFilter</div>
                <div className="header-products">
                    {productCount} produto(s)
                </div>
            </div>
        </header>
    );
}
```

#### Vantagens da Implementação:

- **Atualização em Tempo Real**: Sempre que a lista de produtos é alterada devido à aplicação de filtros, o `Header` reflete automaticamente a nova contagem.
- **Separação de Preocupações**: O `Header` mantém o foco na exibição dos dados, enquanto o gerenciamento do estado é tratado separadamente pelo contexto.
- **Facilidade de Manutenção**: Com o estado global acessível de maneira centralizada, o código fica mais fácil de entender e manter.

Através desta abordagem, o `Header` exemplifica como componentes funcionais em React podem interagir de maneira eficiente com estados globais, contribuindo para uma arquitetura limpa e uma experiência de usuário altamente responsiva.

## Explicação Detalhada do Sistema de Contextos

A arquitetura do `DSFilter` foi projetada para ser altamente modular e escalável, utilizando a `Context API` do React para gerenciar estados globais. Esta abordagem permite que diferentes aspectos do estado da aplicação sejam acessados e modificados em qualquer lugar da árvore de componentes, sem a necessidade de `prop drilling` ou gerenciamento de estado complexo e propenso a erros.

### Como o Sistema de Contexto Funciona:

#### Definição de Contextos Individuais:
Cada contexto, como o `ProductCountContext`, é definido com um estado padrão e funções de atualização. Eles são responsáveis por gerenciar segmentos específicos do estado da aplicação.

#### Combinando Contextos:
O `context-combiner.tsx` é responsável por agrupar múltiplos contextos. Utiliza uma função que recebe os valores atuais do estado para cada contexto e retorna uma `array de providers`, cada um configurado com o seu respectivo estado e funções.

#### Provedor Global:
O `GlobalProvider` no arquivo `context-global.tsx` atua como um componente de ordem superior, recebendo um `array de providers` de contexto e envolvendo os componentes filhos. Ele utiliza a função `reduceRight` para aninhar cada provider, formando uma "capa" de contextos acessíveis globalmente.

#### Uso nos Componentes:
Os componentes da aplicação, como `Header`, podem acessar qualquer estado global diretamente através do hook `useContext`, referenciando o contexto apropriado. Isso elimina a necessidade de passar props desnecessariamente por vários níveis de componentes.

### Benefícios Desta Arquitetura:

- **Reutilização e Separação de Preocupações**: Cada contexto gerencia seu próprio estado, tornando-os reutilizáveis e focados em uma única responsabilidade.
- **Facilidade de Manutenção**: A adição ou alteração de um contexto não afeta os outros. O estado é centralizado mas gerenciado de forma distribuída.
- **Escalabilidade**: Novos contextos podem ser facilmente integrados ao sistema existente sem reescrever ou refatorar o código existente.

## Documentação dos Componentes Principais:

### Contexto de Contagem de Produtos (`ProductCountContext`):

Responsável por armazenar e atualizar a contagem de produtos que atendem aos critérios de filtro. 

```tsx
// Definição do contexto com estado e função de atualização padrão.
export const ProductCountContext = createContext<ProductCountContextType>({
    productCount: 0,
    setProductCount: () => {},
});
```

### Combinador de Contextos (`context-combiner.tsx`):

Centraliza a criação dos providers de contexto, facilitando a agregação e a gestão dos estados globais em um único ponto.

```tsx
// Agrega valores dos contextos e cria os providers correspondentes.
export function createGlobalContextProviders(values: CombinedContextValues) {
    ...
}
```

### Provedor Global (`GlobalProvider`):

Um componente que utiliza a função `createGlobalContextProviders` para receber um array de providers de contexto e utiliza a composição para criar um provedor global que encapsula todos os contextos fornecidos.

```tsx
// Composição de provedores de contexto para envolver componentes filhos.
export function GlobalProvider({ providers, children }: GlobalProviderProps): React.ReactElement {
    ...
}
```

## Conclusão:

O DSFilter é um exemplo prático e didático que ilustra a flexibilidade e o poder da `Context API` em aplicações React. A estrutura adotada aqui serve como um modelo robusto para o gerenciamento de estados globais, que pode ser adaptado e expandido conforme as necessidades do projeto crescem.
