import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
