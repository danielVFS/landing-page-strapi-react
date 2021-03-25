import { BaseTemplate } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: {
    children: (
      <>
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
      </>
    ),
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
