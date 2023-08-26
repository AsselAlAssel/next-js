import { Product } from "@/utilities/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="dark:bg-gray-800">
      <CardActionArea>
        <div className="flex justify-center align-middle p-3">
          <CardMedia
            component="img"
            image={product.image}
            alt="product image"
            className="md:w-auto md:h-[170px] object-fill"
          />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="md:truncate dark:text-white"
          >
            {product.title}
          </Typography>
        </CardContent>
        <p className="m-5 font-bold text-2xl dark:text-white">
          ${product.price}
        </p>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
