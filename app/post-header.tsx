import CoverImage from './cover-image'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function PostHeader({ id, title, coverImage, date, artist, favoriteMonth } : {
  id: string
  title: string
  coverImage: string
  date: string
  artist: string
  favoriteMonth: string
}) {
  return (
    <>
      <div className="album-page-header" data-sb-object-id={id}>
        <CoverImage title={title} url={coverImage} />
        <div className="album-page-info">
          <h2>{monthNames[new Date(favoriteMonth).getUTCMonth()]}</h2>
          <h1 data-sb-field-path="name">{title} ({date})</h1>
          <p data-sb-field-path="artistName" className="album-page-subtitle">{artist}</p>
        </div>
      </div>
    </>
  )
}
