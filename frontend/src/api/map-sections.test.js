import {
  mapSectionTwoColumns,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionContent();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'news coverage and some surprises',
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news</p>',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
    });

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news</p>',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text with no data', () => {
    const data = mapTextGrid();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056174',
      description: 'Debitis cum delectus molestias.',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
          title: 'Teste 1',
          description: 'Lorem ipsum dolor sit',
          __v: 0,
          id: '602fdf2d540c00269e05617c',
        },
        {
          _id: '602fdf2d540c00269e05617d',
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          __v: 0,
          id: '602fdf2d540c00269e05617d',
        },
        {
          _id: '602fdf2d540c00269e05617e',
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e05617e',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '602fdf2e540c00269e056199',
        name: 'grid-one',
        section_id: 'grid-one',
        __v: 0,
        id: '602fdf2e540c00269e056199',
      },
      __v: 2,
      id: '602fdf2d540c00269e056174',
    });

    expect(data.component).toBe('section.section-grid');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('Debitis cum delectus molestias.');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Lorem ipsum dolor sit');
    expect(data.grid[1].title).toBe('Teste 2');
    expect(data.grid[1].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    );
  });
});
