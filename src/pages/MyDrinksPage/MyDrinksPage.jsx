import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useDrink } from '../../hooks/useDrink';
import { getOwnDrinks } from '../../redux/drinks/drinks.operations';
import { Container } from '../../components/Layout/Container/Container';
import { MyDrinksWrapper } from './MyDrinksPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import NotFoundDrinks from '../../components/NotFoundDrinks/NotFoundDrinks';
import Paginator from '../../components/Paginator/Paginator';

export default function MyDrinks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { total, ownDrinks } = useDrink();
  const [hasDrinks, setHasDrinks] = useState(false);

  const drinksPerPage = 6;

  const onPageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    if (ownDrinks?.length === 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
    setHasDrinks(ownDrinks?.length > 0);
  }, [currentPage, ownDrinks]);

  useEffect(() => {
    navigate(`?page=${currentPage}`);
  }, [currentPage, navigate]);

  useEffect(() => {
    dispatch(getOwnDrinks({ page: currentPage, limit: drinksPerPage }))
      .unwrap()
      .catch((error) => console.log(error));
  }, [dispatch, currentPage, total, drinksPerPage]);

  return (
    <Container>
      <MyDrinksWrapper>
        <PageTitle title="My drinks" />
        {hasDrinks > 0 ? (
          <>
            <DrinksList
              drinksData={ownDrinks}
              onPageChange={onPageChange}
              currentPage={currentPage}
            />
            <Paginator />
          </>
        ) : (
          <NotFoundDrinks text="You haven't added any cocktails" />
        )}
      </MyDrinksWrapper>
    </Container>
  );
}
