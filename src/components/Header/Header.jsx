import classes from './Header.module.scss'

export const Header = () => {
  return (
    <div className={classes.header}>
        <h1>Palash</h1>
        <nav>
          <span>Home</span>
          <span>Skills</span>
          <span>Experience</span>
          <span>Project</span>
          <span>Education</span>
        </nav>
    </div>
  )
}
