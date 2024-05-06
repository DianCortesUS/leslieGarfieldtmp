import BlogTemplate from 'templates/blog';
import {filterBlogQuery} from 'templates/blog/helpers';

export async function getServerSideProps({query}) {
  return {
    props: {
      query: filterBlogQuery(query),
    },
  };
}

export default BlogTemplate;
