import React from 'react';
import VideoItem from './VideoItem';
import { useTable, useSortBy, usePagination } from 'react-table';


const VideoList = ({ videos, handleVideoSelect }) => {
  console.log(videos);
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    // console.log(video.id);
  });
};

export const columns = [
  {
    Header: 'TITLE',
    accessor: 'title',

    sortType: 'basic',
  },
  {
    Header: 'PUBLISHED ON',
    accessor: 'publishedAt',

    sortType: 'basic',
  },
  {
    Header: 'VIEWS',
    accessor: 'viewCount',

    sortType: 'basic',
  },
  {
    Header: 'LIKES',
    accessor: 'likeCount',
    sortType: 'basic',
  },
  {
    Header: 'DISLIKES',
    accessor: 'dislikeCount',

    sortType: 'basic',
  },
];

export const Table = ({
  columns,
  videos,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,

    nextPage,
    previousPage,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: videos,
      initialState: { pageSize: 50, pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
      autoResetPage: false,
    },
    useSortBy,
    usePagination
  );
  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  console.log(pageIndex);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '🔽 '
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan='100'>Loading...</td>
            ) : (
              <td colSpan='100'>
                Showing {page.length}
                results
              </td>
            )}
          </tr>
        </tbody>
      </table>

      <div className='pagination'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>

        <span>
          Page
          <strong>{pageIndex + 1}</strong>
        </span>
      </div>
    </>
  );
};

export default VideoList;
