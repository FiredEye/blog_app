import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div class={styles.loadingContainer}>
  <div class={styles.loadingDot}></div>
  <div class={styles.loadingDot}></div>
  <div class={styles.loadingDot}></div>
</div>
  )
}

export default Loading