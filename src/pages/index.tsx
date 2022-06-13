import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { generateToken } from '../services/generateToken';
import styles from '../styles/Index.module.scss';

export default function Page() {
  const [token, setToken] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [animal, setAnimal] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>(0);
  const [bankAccount, setBankAccount] = useState<number>(0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const errors: string[] = [];

    if (!animal || animal > 25 || animal < 1) errors.push('É preciso selecionar um animal');

    if (!value || !isNumeric(value) || value < 1) errors.push('É preciso inserir um valor');

    if (!name) errors.push('É preciso inserir um nome');

    if (!phone || phone < 1000000000 || phone > 9999999999)
      errors.push('É preciso inserir um nº de telefone válido');

    if (
      !bankAccount ||
      String(bankAccount).length !== 8 ||
      !isNumeric(bankAccount) ||
      bankAccount < 10000000 ||
      bankAccount > 99999999
    )
      errors.push('É preciso inserir uma conta bancária válido');

    if (errors.length > 0) {
      return alert(errors.map((error) => error + ';'));
    }

    const generatedToken = generateToken();

    setToken(generatedToken);

    setIsLoading(true);

    resetFields();

    api
      .post(
        '/bet/create',
        JSON.stringify({
          token: generatedToken,
          value: Number(value),
          animal: Number(animal),
          name: name.toLocaleLowerCase(),
          phone: String(phone),
          bank_account: bankAccount,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          return alert('Aposta criada!');
        }
      })
      .catch((response) => {
        if (response.response.status === 429) {
          return alert('Muitas apostas criadas em pouco tempo. Espere um pouco e tente denovo.');
        } else {
          return alert(
            'Falha ao criar aposta. Verifique se os campos estão corretamente preenchidos e tente novamente.'
          );
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleCopyToken() {
    navigator.clipboard.writeText(token);

    alert('Token copiado!');
  }

  function resetFields() {
    handleChangeGridBoxBackgroundColor();
    setValue(0);
    setAnimal(0);
    setName('');
    setPhone(0);
    setBankAccount(0);
  }

  function handleChangeGridBoxBackgroundColor(id?: number) {
    const animalBoxes = document.querySelectorAll(`#animalGrid label`);
    animalBoxes.forEach((box) => box.classList.remove('selected'));

    if (id) {
      const animalBox = document.querySelector(`#animalGrid label#${id}`);
      animalBox?.classList.add('selected');
    }
  }

  function isNumeric(str: any) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  return (
    <>
      <Head>
        <title>Cartela - Jogo do Bicho</title>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {token && (
        <main className={`${styles.main} ${styles.token_container}`}>
          <h3 title="Copiar token" onClick={handleCopyToken}>
            {token}
          </h3>
        </main>
      )}

      <main className={`${styles.main}`}>
        <div
          className={styles.barrier}
          style={{
            display: isLoading ? 'flex' : 'none',
          }}
        >
          <div></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="inputs"
            style={{ display: 'none' }}
            onChange={(
              e: FormEvent<HTMLDivElement> & {
                target: {
                  id: any;
                  value: any;
                };
              }
            ) => {
              handleChangeGridBoxBackgroundColor(e.target.id);

              setAnimal(e.target.value);
            }}
          >
            <input type="radio" name="animal" id="animal-1" value={1} />
            <input type="radio" name="animal" id="animal-2" value={2} />
            <input type="radio" name="animal" id="animal-3" value={3} />
            <input type="radio" name="animal" id="animal-4" value={4} />
            <input type="radio" name="animal" id="animal-5" value={5} />
            <input type="radio" name="animal" id="animal-6" value={6} />
            <input type="radio" name="animal" id="animal-7" value={7} />
            <input type="radio" name="animal" id="animal-8" value={8} />
            <input type="radio" name="animal" id="animal-9" value={9} />
            <input type="radio" name="animal" id="animal-10" value={10} />
            <input type="radio" name="animal" id="animal-11" value={11} />
            <input type="radio" name="animal" id="animal-12" value={12} />
            <input type="radio" name="animal" id="animal-13" value={13} />
            <input type="radio" name="animal" id="animal-14" value={14} />
            <input type="radio" name="animal" id="animal-15" value={15} />
            <input type="radio" name="animal" id="animal-16" value={16} />
            <input type="radio" name="animal" id="animal-17" value={17} />
            <input type="radio" name="animal" id="animal-18" value={18} />
            <input type="radio" name="animal" id="animal-19" value={19} />
            <input type="radio" name="animal" id="animal-20" value={20} />
            <input type="radio" name="animal" id="animal-21" value={21} />
            <input type="radio" name="animal" id="animal-22" value={22} />
            <input type="radio" name="animal" id="animal-23" value={23} />
            <input type="radio" name="animal" id="animal-24" value={24} />
            <input type="radio" name="animal" id="animal-25" value={25} />
          </div>
          <div id="animalGrid" className={styles.animalGrid}>
            <label htmlFor="animal-1" id="animal-1" title="Esquilo">
              &#128063;
            </label>
            <label htmlFor="animal-2" id="animal-2" title="Polvo">
              &#128025;
            </label>
            <label htmlFor="animal-3" id="animal-3" title="Formiga">
              &#128028;
            </label>
            <label htmlFor="animal-4" id="animal-4" title="Baleia">
              &#128011;
            </label>
            <label htmlFor="animal-5" id="animal-5" title="Cachorro">
              &#128021;
            </label>
            <label htmlFor="animal-6" id="animal-6" title="Abelha">
              &#128029;
            </label>
            <label htmlFor="animal-7" id="animal-7" title="Cabra">
              &#128016;
            </label>
            <label htmlFor="animal-8" id="animal-8" title="Carneiro">
              &#128015;
            </label>
            <label htmlFor="animal-9" id="animal-9" title="Cobra">
              &#128013;
            </label>
            <label htmlFor="animal-10" id="animal-10" title="Coelho">
              &#128007;
            </label>
            <label htmlFor="animal-11" id="animal-11" title="Cavalo">
              &#128014;
            </label>
            <label htmlFor="animal-12" id="animal-12" title="Elefante">
              &#128024;
            </label>
            <label htmlFor="animal-13" id="animal-13" title="Galo">
              &#128019;
            </label>
            <label htmlFor="animal-14" id="animal-14" title="Camelo">
              &#128042;
            </label>
            <label htmlFor="animal-15" id="animal-15" title="Jacaré">
              &#128010;
            </label>
            <label htmlFor="animal-16" id="animal-16" title="Golfinho">
              &#128044;
            </label>
            <label htmlFor="animal-17" id="animal-17" title="Macaco">
              &#128018;
            </label>
            <label htmlFor="animal-18" id="animal-18" title="Porco">
              &#128022;
            </label>
            <label htmlFor="animal-19" id="animal-19" title="Pássaro">
              &#128038;
            </label>
            <label htmlFor="animal-20" id="animal-20" title="Peru">
              &#129411;
            </label>
            <label htmlFor="animal-21" id="animal-21" title="Touro">
              &#128002;
            </label>
            <label htmlFor="animal-22" id="animal-22" title="Tigre">
              &#128005;
            </label>
            <label htmlFor="animal-23" id="animal-23" title="Tartaruga">
              &#128034;
            </label>
            <label htmlFor="animal-24" id="animal-24" title="Joaninha">
              &#128030;
            </label>
            <label htmlFor="animal-25" id="animal-25" title="Vaca">
              &#128004;
            </label>
          </div>

          <label className={`${styles.field} ${styles.field_v1}`}>
            <input
              className={styles.field__input}
              type="number"
              placeholder="ex: $1.000"
              min={1}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              required
            />
            <span className={styles.field__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-cash"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="7" y="9" width="14" height="10" rx="2" />
                <circle cx="14" cy="14" r="2" />
                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
              </svg>
            </span>
            <span className={styles.field__labelWrap}>
              <span className={styles.field__label}>Valor</span>
            </span>
          </label>

          <label className={`${styles.field} ${styles.field_v1}`}>
            <input
              className={styles.field__input}
              type="text"
              placeholder="ex: Dave Crookman"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className={styles.field__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </span>
            <span className={styles.field__labelWrap}>
              <span className={styles.field__label}>Nome</span>
            </span>
          </label>

          <label className={`${styles.field} ${styles.field_v1}`}>
            <input
              className={styles.field__input}
              type="number"
              minLength={10}
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(Number(e.target.value))}
              required
              placeholder="ex: 1234567890"
            />
            <span className={styles.field__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </span>

            <span className={styles.field__labelWrap}>
              <span className={styles.field__label}>Nº Telefone</span>
            </span>
          </label>

          <label className={`${styles.field} ${styles.field_v1}`}>
            <input
              className={styles.field__input}
              type="number"
              placeholder="ex: 61202246"
              value={bankAccount}
              onChange={(e) => setBankAccount(Number(e.target.value))}
              required
            />
            <span className={styles.field__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </span>
            <span className={styles.field__labelWrap}>
              <span className={styles.field__label}>Conta Bancária</span>
            </span>
          </label>

          <div className={styles.actions}>
            <button type="submit">jogar</button>
          </div>
        </form>
      </main>
    </>
  );
}
