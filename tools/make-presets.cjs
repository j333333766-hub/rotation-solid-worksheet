// tools/presets/*.json → src/presets/*.algeo3d (알지오3D set-data 형식: "poly_" + LZString.compressToBase64)
//   node tools/make-presets.cjs
const fs = require('fs'), path = require('path');
const LZString = require('./lz-string.min.js');
const dir = path.join(__dirname, 'presets'), out = path.join(__dirname, '..', 'src', 'presets');
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
  const json = JSON.stringify(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  fs.writeFileSync(path.join(out, f.replace('.json', '.algeo3d')), 'poly_' + LZString.compressToBase64(json));
  console.log(f);
}
