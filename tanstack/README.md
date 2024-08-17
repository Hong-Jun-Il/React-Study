# Tanstack-query 메모

## 데이터 로딩 상태(isLoading, isFetching, isPending) 3개 차이
> ### 1. isLoading(isPending 나온 후 권장 x)
> * 캐시에서 가져온 데이터라면 isLoading은 false임
> * 캐시에서 가져온 것이 아니라면 true
> * 데이터 fetching의 성공과 실패에 관계 없이 캐시에서 가져온 데이터가 아니라면 무조건 true가 됨
> * 실패했는데도 true인 상태가 될 수 있으므로 성공 시에만 추가적인 로직을 설정하려면 isPending 사용 권장
> ### 2. isFetching
> * 캐시에 관계 없이 통신중이라면 true
> ### 3. isPending
> * isLoading과 마찬가지로 캐시에서 가져온 데이터라면 false
> * 단, 통신의 성공 시에만 true가 됨. 실패한다면 false

## useQuery와 useQueries의 차이
> * useQuery는 하나의 통신을 하는 것이고 useQueries는 여러 개의 쿼리를 병렬적으로 처리하여 배열 형태로 return
> * 단 하나의 업데이트(상태 변경)가 빈번하게 이루어지는 경우 useQuery를 통해 모든 데이터를 받아온 후 처리하는 것보다는 useQueries를 통해 병렬적으로 받아온 후 고유한 key 값을 통해 그 하나의 데이터만 캐시 무효화 후 변경하는 것이 효율적임

## useQuery의 isPlaceholderData란
> * 데이터가 아직 업데이트가 되지 않았을 때(백그라운드에서 가져온 데이터를 사용했을 때) true 상태임

## useInfiniteQuery의 인자
> * getNextPageParam과 getPreviousPageParam에서 return하는 값을 객체 형식으로 인자로 전달함: { PageParam }