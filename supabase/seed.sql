INSERT INTO categories (name)
VALUES
  ('Resistor'),
  ('Kapasitor'),
  ('Induktor & Coil'),
  ('Dioda'),
  ('Transistor'),
  ('IC & Integrated Circuit'),
  ('Mikrokontroler'),
  ('Sensor'),
  ('Modul Elektronik'),
  ('LED & Display'),
  ('Relay'),
  ('Switch & Push Button'),
  ('Connector'),
  ('Kabel'),
  ('Power Supply'),
  ('Baterai & Battery Holder'),
  ('PCB'),
  ('Potensiometer'),
  ('Kristal & Oscillator'),
  ('Fuse & Protection'),
  ('Motor & Aktuator'),
  ('Komponen SMD'),
  ('Komponen Elektronik Lainnya');


INSERT INTO products (
    name,
    category_id,
    normal_price,
    special_price,
    stock,
    description,
    image_url,
    slug
)
VALUES
(
    'Kabel Serabut per Meter',
    (SELECT id FROM categories WHERE name = 'Kabel'),
    3000,
    NULL,
    25,
    'Kabel serabut fleksibel yang dijual per meter, cocok untuk kebutuhan instalasi dan berbagai proyek elektronik.',
    'https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/69948fda3d314110893c5852ee35af1d~.jpeg.webp',
    'kabel-serabut-per-meter'
),
(
    'Tinol per Meter',
    (SELECT id FROM categories WHERE name = 'Komponen Elektronik Lainnya'),
    3500,
    10000,
    10,
    'Kawat timah solder yang dijual per meter, digunakan untuk menyolder dan menghubungkan komponen elektronik.',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/97/MTA-180653800/a_timah_solder_tenol_tinol_tin_penyambung_pcb_kabel_listrik_wire_full01_19799187.jpg',
    'tinol-per-meter'
),
(
    'Kabel Listrik Putih per Meter',
    (SELECT id FROM categories WHERE name = 'Kabel'),
    7000,
    NULL,
    30,
    'Kabel listrik berwarna putih yang dijual per meter, cocok untuk kebutuhan instalasi dan kelistrikan.',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-73613899/supreme_supreme_full01.jpg',
    'kabel-listrik-putih-per-meter'
),
(
    'Batre AA sepasang',
    (SELECT id FROM categories WHERE name = 'Baterai & Battery Holder'),
    5000,
    NULL,
    5,
    'Baterai ukuran AA yang dijual sepasang, cocok digunakan untuk berbagai perangkat elektronik dan kebutuhan rumah tangga.',
    'https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/09092023/639fd0d6fee1688b9e498e6a/64fbf2dfcbcdf42a3ccb8a2e/ccfe7547d4a7299411d531fbccfd9e.jpg?x-oss-process=image/resize,m_pad,w_432,h_432/quality,Q_70',
    'batre-aa-sepasang'
),
(
    'Tinol Paragon Rol Kecil (10 M)',
    (SELECT id FROM categories WHERE name = 'Komponen Elektronik Lainnya'),
    20000,
    NULL,
    5,
    'Timah solder Paragon dalam bentuk rol kecil dengan panjang 10 meter, cocok untuk kebutuhan penyolderan komponen elektronik.',
    'https://down-id.img.susercontent.com/file/7822b0df1ea8526cccdf782779815f67',
    'tinol-paragon-rol-kecil-10-m'
);