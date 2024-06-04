import styled from '@emotion/styled';

import { CATEGORY, SORT } from '@_constants/filterOptions';
import { PAGE_INFORMATION } from '@_constants/page';

import { CartItemsProvider } from '@_context/CartItemsProvider';
import useProducts, { SortType } from '@_hooks/useProducts';
import Layout from '@_components/layout';
import Header from '@_components/product/Header';
import Title from '@_components/common/Title';
import Dropdown from '@_components/common/Dropdown';
import ProductList from '@_components/product/ProductList';
import IntersectionArea from '@_components/common/IntersectionArea';
import ProductItem from '@_components/product/ProductItem';

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
              size='default'
              defaultContent={CATEGORY.defaultContent}
              options={CATEGORY.options}
              onSelect={onCategorySelect}
            />
            <Dropdown
              size='default'
              defaultContent={SORT.defaultContent}
              options={SORT.options}
              onSelect={onSortSelect}
            />
          </FilterContainer>

          <ProductList loading={loading} error={error}>
            {products.map((product, idx) => {
              const isLastProduct = idx + 1 === products.length;
              return isLastProduct ? (
                <IntersectionArea onImpression={fetchNextPage} key={`${product.id}_${idx}`}>
                  <ProductItem product={product} />
                </IntersectionArea>
              ) : (
                <ProductItem product={product} key={`${product.id}_${idx}`} />
              );
            })}
          </ProductList>
        </Layout>
      </CartItemsProvider>
    </Wrapper>
  );
}

export default App;
