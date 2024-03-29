import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { CategoryItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: '0', flexDirection: 'column' })}
`;

const Categories = () => {
    return (
        <Container>
            {CategoryItems.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
