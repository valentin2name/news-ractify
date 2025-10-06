import styles from './style.module.css'

const ScreenSaver = ({image}) => {
  return (
    <div className={styles.wrapper}>
        {image ? <img src={image} alt='news' className={styles.image} /> : null}
    </div>
  )
}

export default ScreenSaver