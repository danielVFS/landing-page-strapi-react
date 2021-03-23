import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in? Voluptatem suscipit eligendi ipsa amet libero ut nobis, odio molestias veniam minus unde quos optio omnis deleniti voluptatibus molestiae dolore?`,
    srcImg: 'assets/images/grid-image.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
