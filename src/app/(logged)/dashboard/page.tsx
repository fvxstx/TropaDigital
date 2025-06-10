import styles from "@/styles/dashboard.module.scss";
import { BiPlus, BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const EventsData = [
  {
    name: "Clube do Laço Coração Pantaneiro",
    total: 10,
    status: true,
    data: "09 a 11 de Junho",
  },
  {
    name: "Clube do Laço Coração Pantaneiro",
    total: 10,
    status: true,
    data: "09 a 11 de Junho",
  },
];

export default function DashboardPage() {
  return (
    <main className={styles.main}>
      <h2>
        Bem vindo de volta, <span>Kaique Steck</span>
      </h2>
      <p>Todos eventos</p>

      <div className={styles.containerTable}>
        <div className={styles.searchButton}>
          <div className={styles.searchInputContainer}>
            <BiSearch className={styles.searchIcon} size={16} />
            <input type="text" placeholder="Buscar eventos" />
          </div>
          <button>
            <BiPlus size={23} /> Inserir novo
          </button>
        </div>
        <div className={styles.scrollWrapper}>
          <table className={styles.tableContainer}>
            <thead>
              <tr>
                <th>Nome do evento</th>
                <th>Total de equipes</th>
                <th>Status</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {EventsData.map((event, index) => {
                return (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.total}</td>
                    <td>
                      {event.status} {event.status ? "Ativo" : "Inativo"}
                    </td>
                    <td>{event.data}</td>
                    <td>
                      <button>
                        <BsThreeDotsVertical color="#CC6237" size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.paginationContainer}>
          <button>Anterior</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Próxima</button>
        </div>
      </div>
    </main>
  );
}
