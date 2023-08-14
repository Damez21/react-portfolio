export default function PortfolioList(){
    const portfolios = [
        {
            name: "Portfolio 1",
            link: "https://www.google.com/"
        }
    ]

    return (
        <section>
            <h2>Portfolios</h2>
            <ul>
            {
                portfolios.map((portfolio) => {
                    <li key = {i}>
                        <a href={portfolio.link}>
                            {portfolio.name}
                        </a>
                    </li>
                }) 
            }
            </ul>
        </section>
    )
};