import { Link } from 'react-router-dom'

interface INav {
    links: {
        href:string,
        label: string
    }[]
}

export default function Nav({
    links
}:INav) {
    return (
        <nav>
            {
                links.map(({
                    href,
                    label
                }, i) => (
                    <Link key={i} to={href}>{label}</Link>
                ))
            }
        </nav>
    )
}