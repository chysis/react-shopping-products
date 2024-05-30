import Dropdown from './components/common/Dropdown';
import Title from './components/common/Title';
import Layout from './components/layout';
import Header from './components/product/Header';

import styled from '@emotion/styled';
import IntersectionArea from './components/common/IntersectionArea';
import useProducts, { SortType } from './components/hooks/useProducts';
import ProductItem from './components/product/ProductItem';
import ProductList from './components/product/ProductList';

import { CartItemsProvider } from './context/CartItemsProvider';

import { CATEGORY, SORT } from './constants/filterOptions';
import { PAGE_INFORMATION } from './constants/page';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  const { products, setCategory, setSort, fetchNextPage, error, loading } = useProducts();

  const onCategorySelect = (value: string) => {
    setCategory(value);
  };
  const onSortSelect = (value: string) => {
    setSort(value as SortType);
  };

  return (
    <Wrapper>
      <CartItemsProvider>
        <Layout header={<Header />}>
          <Title content={PAGE_INFORMATION.main.title} />
          <FilterContainer>
            <Dropdown
              size='small'
              defaultContent={CATEGORY.defaultContent}
              options={CATEGORY.options}
              onSelect={onCategorySelect}
            />
            <Dropdown
              size='small'
              defaultContent={SORT.defaultContent}
              options={SORT.options}
              onSelect={onSortSelect}
            />
          </FilterContainer>

          <ProductList loading={loading} error={error}>
            {products.map((product, idx) => {
              return idx + 1 !== products.length ? (
                <ProductItem product={product} key={`${product.id}_${idx}`} />
              ) : (
                <IntersectionArea onImpression={fetchNextPage} key={`${product.id}_${idx}`}>
                  <ProductItem product={product} />
                </IntersectionArea>
              );
            })}
          </ProductList>
        </Layout>
      </CartItemsProvider>
    </Wrapper>
  );
}

export default App;
