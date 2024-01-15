import styled from 'styled-components';

/*
 Products.css içindeki stik kurallarını styled componentler için kullanabilirsin.
 styled-component projeye yüklünmiş durumda. 
 Bu sayfada kullanmaya başlayabilirsin.
 Temiz kod için işi biten kod satırlarını, fonksiyonları silmeyi unutma!
*/

const ProductCard = styled.div`

`;
const Category = styled.h2`

`;
const Image = styled.img``;
const PriceTag = styled.p`
border: 2px solid ${(props) => (props.category ? 'red' : 'green')}
&:hover {

}
`;

const Description = styled.p``;
const Title = styled.h3``;

export default function Product(props) {
  const { product } = props;

  return (
    <div className="product-card">
      <ProductCard>{product.card}</ProductCard>
      <Category>{product.category}</Category>
      <Image src={product.image} />
      <PriceTag category isSale={product.category === 'electronics'}>
        {product.price}$
      </PriceTag>
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
    </div>
  );
}
