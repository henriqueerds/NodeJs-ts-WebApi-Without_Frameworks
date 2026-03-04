# Nome do Aplicativo
Podcast Menager

### Descrição
Um app ap estilo NetFlix, aonde possa centralizar diferentes episódios podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeos.

### Features
- Listar os episódios podcasts em sessões de categorias.
    - [saúde, bodybuilder, mentalidade, humor].
- Filtrar episódios por nome de podcast.

## Como
Vou retornar em uma api rest (json) o nome podcast, nome do episódio, imagem de capa, link, category

    ```js
    [
    {
        podcastName: "flow",
        episode: "CBUM -Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "bodybuilder", "esporte"]
    }
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELO -Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["corrida", "esporte"]
    }

    ]

    ```