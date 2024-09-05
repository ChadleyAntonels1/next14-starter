import { Suspense } from "react";
import styles from "./userProfile.module.css";
import { auth } from "@/lib/auth";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";

const Profile = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <div>posts</div>
          </Suspense>
        </div>
        <div className={styles.col}>
          <div><AdminPostForm userId = {session.user.id} /></div>
        </div>
      </div>
      


    </div>
  );
};

export default Profile;