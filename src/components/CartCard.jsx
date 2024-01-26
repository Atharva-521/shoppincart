import { MdDelete } from "react-icons/md";

export default function CartCard({item}){
    const {title,price,description,image} = item;

    return(
        <div>
            <div>
                <div>
                    <img src={image} />
                </div>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                        <p>${price}</p>
                        <MdDelete />
                    </div>
                </div>
            </div>
            

        </div>
    )
}