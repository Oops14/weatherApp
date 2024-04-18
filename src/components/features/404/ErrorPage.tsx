import style from './error-page.module.scss'

export const ErrorPage = () => {
    return (
        <section className={style.error_section}>
            <div>
                <h1>404</h1>
                <h1>Page not found</h1>
            </div>
        </section>
    )
}
