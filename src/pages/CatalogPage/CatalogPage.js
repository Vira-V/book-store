import { catalog } from "../../catalog";
import { BookCatalog } from "../../components/BookCatalog/BookCatalog";

export const CatalogPage = () => (
    <BookCatalog catalog={catalog}/>
  )