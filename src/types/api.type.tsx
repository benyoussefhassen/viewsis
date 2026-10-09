export type Post = {
  id_article: string;
  date?: string;
  lien_image_alaune?: string;
  titre?: string;
  sur_titre?: string;
  public?: boolean;
  libere?: boolean;
  headline?: string;
  titre_auteur_principale?: string;
  content?: string;
};

export enum PostsApiType {
  Category = 'category',
  Dossiers = 'dossiers',
  PostTag = 'post_tag',
}
