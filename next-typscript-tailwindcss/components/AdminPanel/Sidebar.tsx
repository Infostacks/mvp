import styles from "../../styles/Global.js"

const Sidebar = () => {
    return (
      <div className="bg-[#3D405B] px-5 py-5 flex flex-col justify-center h-full w-full text-white z-50 drop-shadow-lg">
        <button
          type="button"
          className={styles.greenBtn}
        >
          Preview Sections
        </button>
        <button
          type="button"
          className={styles.greenBtn}
        >
          Promotion Section
        </button>
        <button
          type="button"
          className={styles.greenBtn}
        >
          Featured Section
        </button>
        <button
          type="button"
          className={styles.greenBtn}
        >
          Proud Project
        </button>
        <button
          type="button"
          className={styles.greenBtn}
        >
          Companies
        </button>
      </div>
    );
}

export default Sidebar;