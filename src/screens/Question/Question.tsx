import styled from 'styled-components';
import backgroundimg from '@/assets/imgs/qna-background.png';
import { useEffect, useState } from 'react';
import FailAlarm from '@components/commons/FailAlarm';
import Categorys, { CategoryType } from '@utils/common/InsurCategory';
import CategoryItem from '@components/Question/CategoryItem';
import QuestionAnswer from '@components/Question/QuestionAnswer';
import { useQuestionInfiniteQuery } from '@apis/question/question';
import { useInView } from 'react-intersection-observer';
import Loading from '@components/commons/Loading';
import media from '@styles/media';

function Question() {
  const [alarmShown, setAlarmShown] = useState(false);
  const [viewType, setViewType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const myInsueCategory = ['', '연금보험', '상해보험']; // GET요청으로 변경 필요. includes 연산을 위해 빈배열X
  const [categorys, setCategorys] = useState(Categorys); //view에 보여질 category
  const myCategorys = Categorys.filter((category) => myInsueCategory.includes(category.name));

  const [ref, inView] = useInView({ rootMargin: '0px' }); // 무한스크롤 감지
  const { questionQuery } = useQuestionInfiniteQuery();

  // 전체보기, 가입한 보험 보기
  function handleView(type: string) {
    // 변경없음
    if (type === viewType) return;
    // all -> my 이동 시 현재 가입한 보험이 없다면 fail
    if (type === 'my' && myInsueCategory.length === 0) {
      setAlarmShown(true);
    }
    setViewType(type);
    setSelectedCategory([]);
    if (type === 'all') setCategorys(Categorys);
    else setCategorys(myCategorys);
  }

  // 카테고리 선택
  function hanldeSelect(item: CategoryType) {
    //삭제로직
    if (selectedCategory.includes(item.name)) {
      const deleted = selectedCategory.filter((e) => e !== item.name);
      setSelectedCategory(deleted);
    }
    //추가로직
    else {
      const update = [...selectedCategory, item.name];
      setSelectedCategory(update);
    }
  }

  // 카테고리가 바뀌면 검색 요청
  useEffect(() => {
    console.log('새로 filter 요청');
  }, [selectedCategory]);

  // 무한 스크롤 감지시 페이지 추가 요청
  useEffect(() => {
    if (inView) {
      console.log('data 추가');
      questionQuery.fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (alarmShown) {
      setTimeout(() => {
        setAlarmShown(false);
      }, 2000);
    }
  }, [alarmShown]);

  return (
    <Container>
      <Head>
        <BackImg src={backgroundimg} />
        <TextBox>
          <p>AI 인슈플래너,</p>
          <p>다른 사람은 이런 고민을 하고있어요.</p>
        </TextBox>
      </Head>

      <Search>
        <SearchBox>
          <ViewGroup>
            <ViewBtn selected={viewType === 'all'} onClick={() => handleView('all')}>
              전체보기
            </ViewBtn>
            <ViewBtn selected={viewType === 'my'} onClick={() => handleView('my')}>
              가입한 보험 보기
            </ViewBtn>
          </ViewGroup>
          <FailAlarm text={'현재 가입한 보험이 없습니다.'} alarmShown={alarmShown} />
          <ScrollGroup>
            <CategoryGroup>
              {categorys.map((category, index) => (
                <div
                  key={category.value}
                  onClick={() => hanldeSelect(category)}
                  className={index > categorys.length / 2 ? 'leftmargin' : ''}
                >
                  <CategoryItem
                    name={category.name}
                    Icon={category.miniIcon}
                    isSelected={selectedCategory.includes(category.name)}
                  />
                </div>
              ))}
            </CategoryGroup>
          </ScrollGroup>
        </SearchBox>
      </Search>

      <List>
        <ListTitle>질문보기</ListTitle>{' '}
        <QList>
          {questionQuery.data?.pages.map((page, pageIndex) =>
            page.data.map((q, index) => (
              <QuestionAnswer key={`${pageIndex}-${index}`} question={q.question} answer={q.answer} tags={q.tags} />
            )),
          )}
        </QList>
        {questionQuery.isFetching && (
          <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
        )}
        <div ref={ref} />
      </List>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
`;
const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary500};
  height: 54.2rem;
  position: relative;
  width: 100%;

  ${media.mobile`
    height: 50rem;
  `}
`;
const BackImg = styled.img`
  width: 100%;
  height: 100%;
  /* transform: 'rotate(-90deg)'; */
  opacity: 0.4;
  object-position: center;
  object-fit: cover;
`;

const TextBox = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: white;
  text-align: center;
  line-height: normal;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);

  ${media.mobile`
    top: 40%;
  `}
`;
const Search = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: -20rem;

  ${media.mobile`
    width: 100%;
    top: -1rem;
  `}
`;
const SearchBox = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 3rem;
  background-color: white;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    border-radius: 0;
    box-shadow: none;
  `}
`;
const ViewGroup = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 1.4rem;
  padding: 0.5rem 0.6rem 0.5rem 0.6rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.Primary_W};

  ${media.mobile`
    position:absolute;
    top: -3rem;
    margin-top:0;
    border-radius: 14px;
  `}
`;
const ViewBtn = styled.div<{ selected: boolean }>`
  border-radius: 1.4rem;
  padding: 2.1rem 0;
  width: 24.8rem;
  text-align: center;
  background-color: ${(props) => (props.selected ? props.theme.colors.Primary500 : '')};
  color: ${(props) => (props.selected ? 'white' : props.theme.colors.Primary500)};
  font-weight: 600;
  line-height: normal;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  transition: 0.2s;

  ${media.small`
    border-radius: 14px;
    width: fit-content;
    padding: 3.1rem 5.1rem;
    font-size: 3rem;
  `};
`;

const ScrollGroup = styled.div`
  ${media.mobile`
    width: 100%;
    position: relative;
    overflow-x: hidden;
    display: inline-block;
    top: 9rem
  `}
`;

const CategoryGroup = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin: 4.7rem 17.6rem 4.4rem 17.6rem;
  justify-content: center;

  ${({ theme }) => media.mobile`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, max-content);
    overflow: auto;
    padding: 5.5rem 7rem 6.5rem 7rem;
    margin:0;
    justify-content: space-between;
    
    border-bottom: 5px solid ${theme.colors.Black_W};
  `}

  .leftmargin {
    ${media.mobile`
      position: relative;
      left: 14rem;
    `}
  }
`;

const List = styled.div`
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: -8rem;
  z-index: 3;

  ${media.mobile`
    width: 80%;
    top: 10rem;
    padding-top: 3.1rem
  `};
`;
const ListTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 600;
  margin-bottom: 3.1rem;

  ${media.small`
    font-size: 18px;
  `}
`;

const QList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;

  ${media.small`
    gap: 8rem;
  `};
`;
export default Question;
