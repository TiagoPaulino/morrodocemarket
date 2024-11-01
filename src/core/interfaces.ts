export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  date: string;
  description: string;
  coverImage: string;
  ogImage: string;
  author: Author["id"];
  categorie: Category["id"];
  tags: Tag["id"][] | [];
}

export interface Author {
  id: string;
  name: string;
  picture: string;
  posts: Post["id"][] | [];
}

export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Tag {
  id: string;
  name: string;
}

/* tiagopaulino96 EMXjsanDAlBllgd3
npm install mongodb
mongodb+srv://tiagopaulino96:EMXjsanDAlBllgd3@cluster0.nkum6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/

// Mockup de dados para a interface Post
const postMock: Partial<Post> = {
  "title": "Explorando o Mundo TypeScript",
  "content": "TypeScript adiciona tipagem estática ao JavaScript e permite a criação de projetos mais seguros e escaláveis. Neste post, vamos explorar suas vantagens e como aplicá-lo em nossos projetos.",
  "description":
    "Uma introdução ao TypeScript e seus benefícios para desenvolvedores JavaScript.",
  "coverImage": "https://example.com/images/capa-typescript.jpg",
  "ogImage": "https://example.com/images/og-typescript.jpg",
  "categorie": "1",
  "tags": ["3", "4"]
}