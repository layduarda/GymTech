import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { UserDetails } from "../models/UserDetails";

export class UserDetailsService {
    private tableName = "user_details";

    async create (details: UserDetails) {
        const docRef = await addDoc(collection(db, this.tableName), details);
    }
}