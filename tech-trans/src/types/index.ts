export interface Article {
    id: string
    title: string
    content: string
    imageUrl: string
  }
  
  export interface PageProps {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
  export interface GenerateMetadataProps {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
  