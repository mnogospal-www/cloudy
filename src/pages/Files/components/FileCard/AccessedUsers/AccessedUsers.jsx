import $ from './accessed-users.module.css';
import { Button } from '../../../../../components/exporter';

function AccessedUsers({ accesses }) {
  return (
    <details>
      <summary>Имеют доступ: {accesses.length}</summary>
      <ol>
        {accesses.map((user, i) => (
          <li className={$['accessed-user']} key={user.email}>
            <div>
              <div>{user.fullname}</div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <Button>Удалить</Button>
          </li>
        ))}
      </ol>
    </details>
  );
}

export { AccessedUsers };
