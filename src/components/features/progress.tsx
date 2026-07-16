const done = "✅ "
const work = "🚧 "
const not = "❌ "

const featureMetadata = {
  classic: done,
  score: done,
  relay: work,
  raid: not,

  classic_start_class: done,
  classic_start_club: done,
  classic_results_class: done,
  classic_results_club: done,
  classic_splits_class: done,
  classic_splits_club: done,
  classic_radios: done,
  classic_ticket: done,
  classic_team_results_class: not,
  classic_team_results_club: not,
  score_start_club: done,
  score_results_class: done,
  score_results_club: done,
  score_splits_class: done,
  score_splits_club: done,
  score_radios: done,
  score_ticket: done,
  score_team_results_class: work,
  score_team_results_club: not,
  overall_results_class: done,
  overall_start_club: not,
  individual_courses: not,
  integration_radios: not,
}

export default featureMetadata
