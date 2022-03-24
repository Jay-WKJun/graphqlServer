# GraphQL server

Movie Api with GraphQL

# What makes GraphQL better than REST API

- Over Fetching

REST Api에선 Api에서 정해진대로 데이터가 내려온다.

하지만 그 데이터를 모두 사용하지는 않는다. 즉, 필요없는 데이터도 함께오기 때문에 비효율 적이다.

GraphQL은 요청자가 **Query를 이용해 필요한 데이터만 요청**하기 때문에 OverFetching의 염려가 없다!

- Under Fetching

Under Fetching은 하나의 요청을 완성하기 위해 여러 Api를 부르는 것을 말한다.

만약 인스타그램 첫 페이지를 완성한다고 하면, 아래 3가지 정도의 요청이 필요하다.

feed, notifications, user

이렇게 되면 통신을 3번이나 하게 되기 때문에 비효율적이다.

게다가, 각 fetch가 over fetch일 가능성이 있다.

하지만, GraphQL이면 한번의 요청으로 정확히 필요한 것만 가져올 수 있다.

## GraphQL은 단 하나의 Api만 존재한다.

단 하나의 Api에 query를 보내 언제든 필요한 데이터만 가져올 수 있다!
