const haliItems = [
  "شوكولاه",
  "حلقوم",
  "معمول",
  "تمر",
  "شوكلت رش",
  "ميني تارت",
  "حلى شرقي",
  "هرم لولو",
  "هرم ماكرون",
  "شوكولاه توت فرش",
  "شوكلت فواكة فرش",
  "شوكولاه توت فرش VIP",
  "شوكلت ماكرون بالاسم",
];

const malehItems = [
  "مقالي",
  "محاشي",
  "ريزتو",
  "فطاير VIP",
  "فطاير ايطالي",
  "موالح ناشفة",
  "بيتزا وايس",
  "تاكو وترتيلا",
  "ميني برجر ميني ساندوتش",
  "كبة وسوشي",
];

export function MenuSection() {
 return <section id="menu" className="mm-section mm-menu" aria-labelledby="menu-heading"><div className="mm-container"><div className="mm-section-heading"><div><p className="mm-eyebrow">SWEET MEETS SAVOURY</p><h2 id="menu-heading">حالي وموالح،<br/><em>والذوق يجمعها.</em></h2></div><p>تفاصيل تكمل مائدتك، وتُرضي أذواق ضيوفك.<br/>تشكيلة متنوّعة لضيافة متكاملة.</p></div><div className="mm-menu-grid">{[{title:"الحالي",en:"The sweet side",items:haliItems},{title:"الموالح",en:"A savoury moment",items:malehItems}].map((menu,index)=><article className="mm-menu-card" key={menu.title}><header><span className="mm-menu-number">0{index+1}</span><div><p dir="ltr">{menu.en}</p><h3>{menu.title}</h3></div><span aria-hidden="true">✧</span></header><ul>{menu.items.map((item,i)=><li key={item}><span>{item}</span><span className="mm-menu-dots"/><small>{String(i+1).padStart(2,"0")}</small></li>)}</ul><a href={`https://wa.me/966552202321?text=${encodeURIComponent(`مرحباً ميلت مور، أود الاستفسار عن قائمة ${menu.title} لمناسبتي.`)}`} target="_blank" rel="noopener noreferrer">استفسر عن قائمة {menu.title} <span>↖</span></a></article>)}</div></div></section>;
}
