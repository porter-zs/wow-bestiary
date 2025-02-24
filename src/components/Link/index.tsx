import "./index.css"

interface Props {
    name: string;
    href: string;
    title: string;

}

export default function Link(
    props: Props
) {
    return (
        <li className="link-container">
            <a href={props.href} title={props.title} className="link">{props.name}</a>
        </li>
    )
}