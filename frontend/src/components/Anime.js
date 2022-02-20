

export const Anime = (props) => {
    const {titel, img, genre, folgen, wertung} = props;
    return (
        <article className={'anime'}>
            <h1>Titel: {titel}</h1>
            <img src={img} alt='' height="480" width="380"/>
            <h2>Genre: {genre}</h2>
            <h3>Folgen: {folgen}</h3>
            <h4>Wertung: {wertung}/10</h4>
        </article>
    );
};