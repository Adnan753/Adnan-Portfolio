interface RuleProps {
  /** Adds the two interior gaps + dots that align with the three-column stat band. */
  thirds?: boolean;
}

/**
 * The signature divider: a hairline that breaks out of the content column into
 * the rail gutter, fading in from the left and punctuated with dots.
 */
export default function Rule({ thirds = false }: RuleProps) {
  return (
    <div className={thirds ? 'xline thirds' : 'xline'}>
      <span className="xdot" style={{ left: 0 }} />
      {thirds && (
        <>
          <span className="xdot" style={{ left: 'var(--d1)' }} />
          <span className="xdot" style={{ left: 'var(--d2)' }} />
        </>
      )}
    </div>
  );
}
