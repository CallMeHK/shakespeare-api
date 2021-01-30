import React from 'react'
import { arrayOf } from 'prop-types'
import Card from '@material-ui/core/Card'
import { css } from '@emotion/css'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'
import IconButton from '@material-ui/core/IconButton'
import RatingsVsTimeChart from './RatingsVsTimeChart'

type IChartModal = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const ChartModal: React.FC<IChartModal> = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        aria-describedby="simple-modal-description"
        aria-labelledby="simple-modal-title"
        onClose={handleClose}
        open={isOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={modalContainerStyle}>
          <Card>
            <CardContent>
              <div className={modalTopRowStyle}>
                <Typography color="textSecondary">Ratings vs Time</Typography>
                <div className={closeButtonContainerStyle}>
                  <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleClose}
                  >
                    <CancelPresentationIcon />
                  </IconButton>
                </div>
              </div>
              <div>
                <RatingsVsTimeChart />
              </div>
            </CardContent>
          </Card>
        </div>
      </Modal>
    </div>
  )
}

const modalContainerStyle = css`
  width: 95%;
  position: absolute;
`
const modalTopRowStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const closeButtonContainerStyle = css`
  margin-bottom: 8px;
`

export default ChartModal
