import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { UserDetails } from "../models/UserDetails";

export class UserDetailsService {
    private tableName = "user_details";

    getCollection() {
        return collection(db, this.tableName)
    }

    async findByUserId(userId: string): Promise<UserDetails | null> {
        const q = query(this.getCollection(), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            return doc.data() as UserDetails;
        }

        return null;
    }

    async getReferenceByUser() {

    }

    async upsert(details: UserDetails): Promise<Boolean> {
        const q = query(this.getCollection(), where("userId", "==", details.userId));
        const querySnapshot = await getDocs(q);

        try {
            if (!querySnapshot.empty) {
                const edoc = doc(db, this.tableName, querySnapshot.docs[0].id);
                await updateDoc(edoc, details);
            } else {
                await addDoc(this.getCollection(), details);
            }

            return true
        } catch (e) {
            console.error("failed to save document", e);

            return false;
        }
    }
}