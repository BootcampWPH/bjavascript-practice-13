const lessons = [
  'Axios & produk',
  'Store pertama',
  'Selector',
  'Logging',
  'Persist',
  'Favorite product',
];
interface LessonNavigationProps {
  activeLesson: number;
  onSelect: (index: number) => void;
}
export default function LessonNavigation({
  activeLesson,
  onSelect,
}: LessonNavigationProps) {
  return (
    <nav
      aria-label="Navigasi lesson"
      className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1"
    >
      {lessons.map((lesson, index) => (
        <button
          key={lesson}
          aria-current={activeLesson === index ? 'step' : undefined}
          onClick={() => onSelect(index)}
          className={`text-left ${activeLesson === index ? 'primary' : 'bg-white'}`}
        >
          <span className="mr-2 opacity-70">0{index + 1}</span>
          {lesson}
        </button>
      ))}
    </nav>
  );
}
