export const services = [
  ['Treadmill repair', 'Belt and deck replacement, motor and control board faults, incline calibration.'],
  ['Elliptical and bike repair', 'Noise, resistance problems, pedal arms, bearings, and console errors.'],
  ['Strength machine repair', 'Cable and pulley replacement, upholstery, bolts, and alignment.'],
  ['Gym service plans', 'Scheduled inspections so your equipment stays in use and members stay happy.'],
  ['Moving and assembly', 'Safe disassembly, transport, and set-up of equipment for gyms and homes.'],
  ['Parts and replacements', 'Genuine and compatible parts sourced for most major brands.'],
]

export const brands = ['Life Fitness', 'Precor', 'NordicTrack', 'Matrix', 'Cybex', 'Sole', 'Horizon', 'Bowflex']

// Yeh numbers sirf sample hain. Asli shop ke asli numbers daalo, ya stats band hata do.
export const stats = [
  ['Machines repaired', 1200, '+'],
  ['Years of experience', 10, '+'],
  ['Brands serviced', 25, '+'],
  ['Same-week visits', 95, '%'],
]

const U = (id, w = 900) => `https://unsplash.com/photos/${id}/download?force=true&w=${w}`

export const heroImage = U('03b61PY89hs', 1800)

const g = (id, category, label, photo) => ({
  id,
  category,
  label,
  before: U(photo),
  after: U(photo),
})

export const gallery = [
  g(1, 'Treadmills', 'Belt and deck replacement', 'M60S0E3XuM8'),
  g(2, 'Treadmills', 'Motor and drive repair', 'EC4mdytpvmk'),
  g(3, 'Ellipticals & bikes', 'Elliptical restoration', 'is3j868ePRk'),
  g(4, 'Ellipticals & bikes', 'Exercise bike overhaul', 'LOA2mTj1vhc'),
  g(5, 'Strength', 'Cable machine restoration', 'h9t94gzm6q8'),
  g(6, 'Strength', 'Bench re-upholstery', '8opGXsff3uc'),
  g(7, 'Treadmills', 'Console and display repair', '8uzJGgJ1_3w'),
  g(8, 'Ellipticals & bikes', 'Pedal arm and bearing fix', 'IEWZJO6oW9Q'),
]