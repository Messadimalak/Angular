import { SanteMentale } from './SanteMentale';  // Chemin relatif
import { User } from './User';

export interface AvisEtudiant {
  id?: number;
  commentaire: string;
  note: number;
  dateAvis?: Date;
  professionnel: User;
  santeMentale: SanteMentale;}
