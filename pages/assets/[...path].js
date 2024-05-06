import {MAP_LEGACY_ASSETS_TO_AWS} from 'constants/aws-assets';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({resolvedUrl}) {
  const newAssetPath = MAP_LEGACY_ASSETS_TO_AWS[removeQueryParams(resolvedUrl)];

  if (newAssetPath) {
    return {
      redirect: {
        destination: newAssetPath,
        permanent: true,
      },
    };
  }

  return {notFound: true};
}

const AssetsComponent = () => {};

export default AssetsComponent;
