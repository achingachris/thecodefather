
const ArticleCard = ({image, title, author, author_image, description}) => {
    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
                <a href="#">
                    <img
                        className="card-img-top"
                        src={image}
                        alt=""
                    />
                </a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">Project One</a>
                    </h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                        aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat
                        sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae?
                        Nihil, dolorem!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard

ArticleCard.defaultProps = {
    'image': "https://via.placeholder.com/700x400",
}
